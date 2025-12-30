import { encodeDomainName } from './encodeDomainName'
import { generateIdentifier } from './generateIdentifier'

export function createDNSQuery(
  domain: string,
  identifier = generateIdentifier()
) {
  //header
  const flags = Buffer.from([0x00, 0x00])
  const questionCount = Buffer.from([0x00, 0x01]) 
  const answerRR = Buffer.from([0x00, 0x00]) 
  const authorityRR = Buffer.from([0x00, 0x00]) 
  const additionalRR = Buffer.from([0x00, 0x00])

  const encodedDomain = encodeDomainName(domain) 
  const type = Buffer.from([0x00, 0x01]) 
  const classBuffer = Buffer.from([0x00, 0x01])

  const query = Buffer.concat([
    new Uint8Array(identifier),
    new Uint8Array(flags),
    new Uint8Array(questionCount),
    new Uint8Array(answerRR),
    new Uint8Array(authorityRR), 
    new Uint8Array(additionalRR),
    new Uint8Array(encodedDomain), 
    new Uint8Array(type),
    new Uint8Array(classBuffer), // Class of query (IN - Internet)
  ])

  return query
}
