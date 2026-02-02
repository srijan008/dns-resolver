export function encodeDomainName(domain: string) {
  const parts = domain.split('.')
  const buffers = parts.map((part) => {
    const length = Buffer.from([part.length]) 
    const content = Buffer.from(part, 'ascii')
    return Buffer.concat([new Uint8Array(length), new Uint8Array(content)])
  })

  
  return Buffer.concat([...buffers.map(b => new Uint8Array(b)), new Uint8Array([0])])
}