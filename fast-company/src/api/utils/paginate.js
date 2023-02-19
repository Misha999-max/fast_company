export function paginate(items, pageNumber, pageSize) {
    const satrtIndex = (pageNumber - 1) * pageSize
    return [...items].splice(satrtIndex, pageSize)
}
