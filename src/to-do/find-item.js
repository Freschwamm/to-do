export default function findItem(item, itemList) {
	const itemPosition = itemList.indexOf(item);
	const nextPosition = itemPosition + 1;

	return { itemPosition, nextPosition };
}
