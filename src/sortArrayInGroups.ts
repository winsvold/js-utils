export interface Group<T> {
  groupLabel: string;
  groupItems: T[];
}

export interface GroupedArray<T> extends Array<Group<T>> {}

/* Tar et array og putter ting i grupper basert på gruppekategorier
 *
 * Feks
 *
 * const myArray = ['Apple', 'Aubergine', 'Lemon'];
 *
 * const inGroups = groupArray(myArray, item => item[0]);
 *
 * console.log(inGroups);
 *
 * // [{groupLabel: 'A', groupItems: ['Apple', 'Aubergine']}, {groupLabel: 'L', groupItems: ['Lemon']}]
 *
 *  */
export function sortArrayInGroups<T>(items: T[], getGroupLabel: (element: T) => string): GroupedArray<T> {
  return items.reduce((acc: GroupedArray<T>, arrayEntry) => {
    const currentCategory = getGroupLabel(arrayEntry);
    const categoryIndex = acc.findIndex((group) => group.groupLabel === currentCategory);
    if (categoryIndex >= 0) {
      acc[categoryIndex].groupItems.push(arrayEntry);
    } else {
      acc.push({
        groupLabel: currentCategory,
        groupItems: [arrayEntry],
      });
    }
    return acc;
  }, []);
}
