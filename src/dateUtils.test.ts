import { formaterDato } from "./dateUtils"

describe('formatter dato', () => {
  it ('Formatterer dato med dato og klokkeslett som default', () => {
    const formattertDato = formaterDato('11-11-2020');
    expect(formattertDato).toEqual('11.11.2020 00:00')
  })
  
  it ('Aksepterer parametere for formattering', () => {
    const formattertDato = formaterDato('11-11-2020', 'PP');
    expect(formattertDato).toEqual('11. nov. 2020')
  })
})