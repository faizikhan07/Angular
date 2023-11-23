import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  currentPage=0;
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8fDA%3D'
    },
    {
      title: 'At the Forest',
      url: 'https://plus.unsplash.com/premium_photo-1675355675451-d49606cb8e4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rm9yZXN0fGVufDB8fDB8fHww'
    },
    {
      title: 'At the City', 
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      title: 'At the Snow', 
      url: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
    }
  ];
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  // getClass() {
  //   const classes = [];
  //   if(something()) {
  //     classes.push('active')
  //   }
  //   if (somethingElse()) {
  //     classes.push('something');
  //   }
  //   if (yetAnotherCheck()) {
  //     classes.push('check')
  //   }
  //   return classes;
  // }
}


