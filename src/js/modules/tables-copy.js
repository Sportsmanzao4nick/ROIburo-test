const rows = document.querySelectorAll('.requisites__table__row');
function copyTableData() {
  rows.forEach((row) => {
    row.addEventListener('mouseenter', () => {
      row.style.backgroundColor = '#D9D9D9';

      row.querySelectorAll('.requisites__table__info').forEach((cell) => {
        const icon = document.createElement('img');
        icon.src = 'src/assets/svg/copy-icon.svg';
        icon.className = 'copy-icon';
        cell.appendChild(icon);
      });
    });

    row.addEventListener('mouseleave', () => {
      row.style.backgroundColor = '#FFFFFF';
      row.querySelectorAll('.copy-icon').forEach((icon) => {
        icon.remove();
      });
    });

    row.addEventListener('click', (event) => {
      const clickedCell = event.target.closest('td');
      if (clickedCell) {
        const textToCopy = clickedCell.textContent.trim();
      }
    });
  });
}

module.exports = copyTableData;