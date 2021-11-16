import { EventEmitter, Injectable } from '@angular/core';
import { post } from './post.model';


@Injectable({providedIn:"root"})
export class postService{

    listChangedEvent: EventEmitter<post[]> = new EventEmitter;

    listOfPosts: post[] = [


        new post('Hampi',
    
         'Hampi was the capital of the Vijayanagara Empire in the 14th century.[3] Chronicles left by Persian and European travellers, particularly the Portuguese, say that Hampi was a prosperous, wealthy and grand city near the Tungabhadra River, with numerous temples, farms and trading markets. By 1500 CE, Hampi-Vijayanagara was the worlds second-largest medieval-era city after Beijing, and probably Indias richest at that time, attracting traders from Persia and Portugal.[4][5] The Vijayanagara Empire was defeated by a coalition of Muslim sultanates; its capital was conquered, pillaged and destroyed by sultanate armies in 1565, after which Hampi remained in ruins',
    
         'https://www.karnatakatourism.org/wp-content/uploads/2020/05/Vastuchitra_AnupGandhe_Karnataka-1.jpg',
    
         'Javafsd@gmail.com', new Date(),3),
    
        new post('Taj Mahal',
    
         'Taj Mahal, also spelled Tadj Mahall, mausoleum complex in Agra, western Uttar Pradesh state, northern India. The Taj Mahal was built by the Mughal emperor Shah Jahān (reigned 1628–58) to immortalize his wife Mumtaz Mahal (“Chosen One of the Palace”), who died in childbirth in 1631, having been the emperor’s inseparable companion since their marriage in 1612. India’s most famous and widely recognized building, it is situated in the eastern part of the city on the southern (right) bank of the Yamuna (Jumna) River. Agra Fort (Red Fort), also on the right bank of the Yamuna, is about 1 mile (1.6 km) west of the Taj Mahal.',
    
         'https://www.thoughtco.com/thmb/1g2-jnNGFo6SMikINMmHOmKsBMI=/3865x2576/filters:fill(auto,1)/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg',
    
         'Javafsd@gmail.com', new Date(),1),
    
         new post('Munnar',
    
         'Munnar rises as three mountain streams merge  - Mudrapuzha, Nallathanni and Kundala. 1,600 m above sea level, this hill station was once the summer resort of the erstwhile British Government in South India. One of the most sought after honeymoon destinations in Kerala, Munnar is replete with resorts and logding facilities that fit a wide rage of budgets. Sprawling tea plantations, picturesque towns, winding lanes and holiday facilities make this a popular resort town. Among the exotic flora found in the forests and grasslands here is the Neelakurinji. This flower which bathes the hills in blue once in every twelve years, will bloom next in 2030. Munnar also has the highest peak in South India, Anamudi, which towers over 2,695 m. ',
    
         'https://assets.traveltriangle.com/blog/wp-content/uploads/2014/11/tea-gardens-munnar-cover.jpg',
    
         'Javafsd@gmail.com', new Date(),6)
    
      ];
  

      //facility 1
      deletePost(index: number){
          this.listOfPosts.splice(index,1);
      }
      //facility 2
      addPost(post:post){
          this.listOfPosts.push(post);
      }

      //facility 3
      updatePost(index:number,post: post){
          this.listOfPosts[index]=post;
      }
    //facility 4
    getPosts(){
        return this.listOfPosts;
    }

    //facility 5
    getPost(index : number){
        
        return this.listOfPosts[index];
        
    }

    //facility 6
    likePost(index: number){
        this.listOfPosts[index].numberOfLikes += 1;
      }

      //facility 7

      setPosts(listOfPosts : post[]){
        this.listOfPosts = listOfPosts;
        this.listChangedEvent.emit(listOfPosts);
      }
    
}