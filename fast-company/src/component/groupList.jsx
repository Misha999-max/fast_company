import React from "react"
import PropTypes from "prop-types"

const GroupList = ({ items, onItemSelect, selectedItem }) => {
    return (
        <ul className="list-group">
            {!Array.isArray(items)
                ? Object.keys(items).map((item) => (
                      <li
                          key={items[item]._id}
                          onClick={() => onItemSelect(items[item])}
                          className={
                              "list-group-item" +
                              (items[item] === selectedItem ? " active" : "")
                          }
                          role="button"
                      >
                          {items[item].name}
                      </li>
                  ))
                : items.map((item) => (
                      <li
                          key={item._id}
                          onClick={() => onItemSelect(item)}
                          className={
                              "list-group-item" +
                              (item === selectedItem ? " active" : "")
                          }
                          role="button"
                      >
                          {item.name}
                      </li>
                  ))}
        </ul>
    )
}

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object.isRequired
}
export default GroupList
