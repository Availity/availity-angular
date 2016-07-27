export default (item) => {
  return `<div>
    <div style='display:inline-block'>
      <img src='${item.thumbnailUrl}'>
    </div>
    <div style='display:inline-block; padding-left: 5px'>
      ${item.text}
    </div>
  </div>`;
};
