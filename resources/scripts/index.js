import { generateRandomNumber } from "./helpers.js";
import { bubbleSort, browserSort, countingSort, heapSort } from "./sort/index.js";

let arrToSort = [];
const arrayLengthInput = document.getElementById('arrayLengthInput');
const processButton = document.getElementById('processButton');
const table = document.getElementsByTagName('table')[0];

const measurePerformance = fn => {
  const start = Date.now();
  fn();
  const end = Date.now();
  
  return end - start;
};

const getFunctionToTest = fn => fn.bind(null, [...arrToSort]);

const getSortingData = sortingFunction => ({
  name: sortingFunction.name.split(' ')[1],
  time: measurePerformance(sortingFunction)
});

const sortResult = ({ time: time1 }, { time: time2}) => time1 > time2 ? 1 : -1;

const createTableRow = ({ name, time }) => {
  const row = document.createElement('tr');
  const nameTd = document.createElement('td');
  const timeTd = document.createElement('td');

  nameTd.textContent = name;
  timeTd.textContent = time;
  row.appendChild(nameTd);
  row.appendChild(timeTd);

  if (name == 'bound browserSort') {
    row.style.color = 'red';
  }

  return row;
};

const createTableHeader = () => {
  const thead = document.createElement('thead');
  const row = document.createElement('tr');
  const nameTh = document.createElement('th');
  const timeTh = document.createElement('th'); 

  nameTh.textContent = 'Sort function';
  timeTh.textContent = 'Executing time';
  row.appendChild(nameTh);
  row.appendChild(timeTh);
  thead.appendChild(row);

  return thead;
};

const createTableBody = rows => {
  const tbody = document.createElement('tbody');
  rows.forEach(row => {
    tbody.appendChild(row);
  });
  
  return tbody;
};

const paintTable = rows => {
  const thead = createTableHeader();
  const tbody = createTableBody(rows);

  table.appendChild(thead);
  table.appendChild(tbody);
};

const sortingFunctions = [bubbleSort, browserSort, countingSort, heapSort];
const operationsChainFunctions = [getFunctionToTest, getSortingData];
  
processButton.addEventListener('click', () => {
  table.innerHTML = '';
  const length = Number(arrayLengthInput.value);
  arrToSort = Array(length).fill(null).map(generateRandomNumber);
  const rows = sortingFunctions
    .map(sortFn => operationsChainFunctions.reduce(
      (acc, operationFn) => operationFn(acc), 
        sortFn,
      ),
    )
    .sort(sortResult)
    .map(createTableRow);
  
  paintTable(rows);
});