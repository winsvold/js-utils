export interface Group<T> {
  label: string;
  items: T[];
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
    const categoryIndex = acc.findIndex((group) => group.label === currentCategory);
    if (categoryIndex >= 0) {
      acc[categoryIndex].items.push(arrayEntry);
    } else {
      acc.push({
        label: currentCategory,
        items: [arrayEntry],
      });
    }
    return acc;
  }, []);
}
