const MOCK_OPTIONS = [
  { id: 1, name: 'Automobiles' },
  { id: 2, name: 'Travel & Events' },
  { id: 3, name: 'Music' },
  { id: 4, name: 'Art' },
  { id: 5, name: 'Science & Technology' },
  { id: 6, name: 'Film & Animation' },
  { id: 7, name: 'Tutorials' },
  { id: 8, name: 'News & Politics' },
];

let comboBoxValue;

const selectedBox = document.querySelector('.selected-box');
const optionsContainer = document.querySelector('.options-container');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-box input');

searchInput.addEventListener('keyup', function (e) {
  onFilterList(e.target.value);
});

searchBox.addEventListener('submit', function (e) {
  e.preventDefault();
});

optionsContainer.addEventListener('change', function (e) {
  comboBoxValue = { id: e.target.value };
  selectedBox.innerHTML = e.target.name;
  optionsContainer.classList.remove('active');
});

const onToggleOpen = () => {
  optionsContainer.classList.toggle('active');

  searchInput.value = '';
  onFilterList('');

  if (optionsContainer.classList.contains('active')) {
    searchInput.focus();
  }
};

const onFilterList = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  MOCK_OPTIONS.forEach((option, index) => {
    let label = option.name.toLowerCase();
    const options = document.getElementsByClassName('option');
    const optionEl = option[index];
    if (!optionEl) return;
    if (label.indexOf(searchTerm) != -1) {
      optionEl.style.display = 'block';
    } else {
      optionEl.style.display = 'none';
    }
  });
};

const onShowOptions = () => {
  optionsContainer.innerHTML = '';
  MOCK_OPTIONS.forEach((option) => {
    const htmlOption = `
    <div class="option" >
      <input
        type="radio"
        class="radio"
        id=${option.id}
        value=${option.id}
        name="category"
      />
      <label for=${option.id}>${option.name}</label>
      </div>
    `;
    optionsContainer.innerHTML += htmlOption;
  });
};

onShowOptions();
