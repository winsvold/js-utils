import { sortArrayInGroups } from "./sortArrayInGroups"

describe('groupArray', () => {
  it('gruppererStrings', () => {
    const fruits = ['Apple', 'Aubergine', 'Lemon'];
    const groupedFruits = sortArrayInGroups(fruits, fruit => fruit[0]);

    expect(groupedFruits.length).toEqual(2);

    expect(groupedFruits[0].groupItems).toHaveLength(2)
    expect(groupedFruits[0].groupLabel).toBe('A')
    expect(groupedFruits[0].groupItems).toContain('Apple')
    expect(groupedFruits[0].groupItems).toContain('Aubergine')

    expect(groupedFruits[1].groupItems).toHaveLength(1)
    expect(groupedFruits[1].groupLabel).toBe('L')
    expect(groupedFruits[1].groupItems).toContain('Lemon')
  })
  
  
  it('grupperer objekter', () => {
    const attractions = [
      {
        country: 'Norway',
        attraction: 'Prekestolen'
      },
      {
        country: 'Norway',
        attraction: 'Sinnataggen'
      },
      {
        country: 'Sweeden',
        attraction: 'Fotografiska museeum'
      },
      {
        country: 'Denmark',
        attraction: 'Den lille havfruen'
      },
    ]

    const groupedAttractions = sortArrayInGroups(attractions, attraction => attraction.country);

    expect(groupedAttractions.length).toEqual(3);

    const norskeAttraksjoner = groupedAttractions.find(attraction => attraction.groupLabel == 'Norway');
    expect(norskeAttraksjoner?.groupItems).toHaveLength(2)
    expect(norskeAttraksjoner?.groupItems.map(it => it.attraction)).toContain('Sinnataggen');
  })
})
