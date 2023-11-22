import '../scss/styles.scss';

window.addEventListener('DOMContentLoaded', () => {
  const changeOfficeGallery = require('./modules/office-galery'),
    copyTableData = require('./modules/tables-copy'),
    changePersonGallery = require('./modules/team-galery');

  changeOfficeGallery();
  copyTableData();
  changePersonGallery();
});