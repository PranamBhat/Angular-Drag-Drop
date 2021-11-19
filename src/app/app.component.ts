import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Drag-Drop';

  state;
  currentFile = {
    index: 0
  };
  files = [];
  index = 0;

  movies = [
    {
      name: 'Test 1',
      order: 3
    },
    {
      name: 'Test 2',
      order: 2
    },
    {
      name: 'Test 3',
      order: 4
    },
    {
      name: 'Test 4',
      order: 1
    },
    {
      name: 'Test 5',
      order: 5
    },
    {
      name: 'Test 6',
      order: 6
    },
    {
      name: 'Test 7',
      order: 7
    },
    {
      name: 'Test 8',
      order: 9
    },
    {
      name: 'Test 9',
      order: 8
    }
  ];

  todo = [
    {
      name: 'A',
      order: 1
    },
    {
      name: 'B',
      order: 4
    },
    {
      name: 'C',
      order: 2
    },
    {
      name: 'D',
      order: 3
    },
    {
      name: 'E',
      order: 5
    },
    {
      name: 'F',
      order: 6
    }
  ];

  done = [
    {
      name: 'G',
      order: 2
    },
    {
      name: 'H',
      order: 1
    },
    {
      name: 'I',
      order: 3
    },
    {
      name: 'J',
      order: 4
    },
    {
      name: 'K',
      order: 5
    },
    {
      name: 'L',
      order: 6
    }
  ];

  constructor() {
    this.movies = this.sortData(this.movies);
    this.todo = this.sortData(this.todo);
    this.done = this.sortData(this.done);
  }

  ngOnInit() {
  }

  sortData(data) {
    data.sort((a, b) => {
      return a.order - b.order;
    });
    return data;
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    console.log(event.previousIndex, event.currentIndex);
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex)
    this.updateDataForMoveItem(this.movies);
  }

  dropTransfer(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.updateDataForMoveItem(event.container.data);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.updateDataForTransferItem(event.previousContainer.data, event.container.data);
    }
  }

  updateDataForMoveItem(data) {
    data.forEach((elem: any, index: number) => {
      elem.order = index + 1;
    });
    console.log('Updated data array => ', data);
  }

  updateDataForTransferItem(prevData, currData) {
    prevData.forEach((elem: any, index: number) => {
      elem.order = index + 1;
    });
    currData.forEach((elem: any, index: number) => {
      elem.order = index + 1;
    });
    console.log('Updated previous data => ', prevData);
    console.log('Updated current data => ', currData);
  }

}
