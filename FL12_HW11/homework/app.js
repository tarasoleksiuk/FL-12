const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

function createDomFromArr(arr, node) {
  const MAIN_UL = document.createElement('ul');

  for (let element of arr) {
    let childLi = document.createElement('li');

    let areaForElementDiv = document.createElement('div');
    let icon = document.createElement('i');
    icon.classList.add('material-icons');
    areaForElementDiv.appendChild(icon);

    let textOfElementSpan = document.createElement('span');
    textOfElementSpan.innerHTML = element.title;
    areaForElementDiv.appendChild(textOfElementSpan);

    childLi.appendChild(areaForElementDiv);
    MAIN_UL.appendChild(childLi);

    if (element.folder) {
      areaForElementDiv.classList.toggle('folder');
      icon.innerText = 'folder';
      areaForElementDiv.addEventListener('click', function () {
        if (icon.innerText === 'folder') {
          icon.innerText = 'folder_open';
        } else {
          icon.innerText = 'folder';
        }
        childLi.querySelector('.closedFolder').classList.toggle('openFolder');
      });
      if (element.children) {
        createDomFromArr(element.children, childLi);
      } else {
        let emptyFolderDiv = document.createElement('div');
        emptyFolderDiv.classList.add('emptyFolder', 'closedFolder');
        emptyFolderDiv.innerText = 'Folder is empty';
        childLi.appendChild(emptyFolderDiv);
      }
    } else {
      areaForElementDiv.classList.toggle('file');
      icon.innerText = 'insert_drive_file';

    }
  }
  node.appendChild(MAIN_UL);
  if (MAIN_UL.parentNode !== rootNode) {
    MAIN_UL.classList.toggle('closedFolder');
  }
}

createDomFromArr(structure, rootNode);