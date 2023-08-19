/* const button = document.querySelector('.js-button');
      console.log(button.classList.contains('js-button'));


      const gaming = document.querySelector('.js-gaming-button');
      const tech = document.querySelector('.js-tech-button'); 
      const music = document.querySelector('.js-music-button');
      


    function changedGamingButton(){
      if (!gaming.classList.contains('is-toggled')){
        gaming.classList.add('is-toggled');
        tech.classList.remove('is-toggled');
        music.classList.remove('is-toggled');
        
      }else{
        gaming.classList.remove('is-toggled');
      }

    }



    function changedMusicButton(){
      
      
      if (!music.classList.contains('is-toggled')){
        tech.classList.remove('is-toggled');
        music.classList.add('is-toggled');
        gaming.classList.remove('is-toggled');

      }else {
        music.classList.remove('is-toggled')
      }
    }
    function changedTechButton(){
      
     
      
      if (!tech.classList.contains('is-toggled')){
        tech.classList.add('is-toggled')
        music.classList.remove('is-toggled')
        gaming.classList.remove('is-toggled')

      }else {
        tech.classList.remove('is-toggled')
      }
      
      
    } */
  
   
    
    function changedAllButton(name){
      
      const button = document.querySelector(name)

      if(button.classList.contains('is-toggled')){
        button.classList.remove('is-toggled')
      }else {
        turnOffotherButton();

        button.classList.add('is-toggled')
        

      }

    }

    function turnOffotherButton(){
      const OpenedButton= document.querySelector('.is-toggled')
      if (OpenedButton != null ){  
        OpenedButton.classList.remove('is-toggled')

      }


    }
      
      

      



     /*  const gaming = document.querySelector('.js-gaming-button');
      const tech = document.querySelector('.js-tech-button'); 
      const music = document.querySelector('.js-music-button');
      

    function changedAllButton(name){
       
      

      if(name==='gaming'){
        realName = gaming
      }else if(name ==='tech'){
        realName = tech
      }else if(name ==='music'){
        realName= music
      }
        
      
      if (realName.classList.contains('is-toggled')){
        tech.classList.remove('is-toggled')
        music.classList.remove('is-toggled')
        gaming.classList.remove('is-toggled')
      }else{
      tech.classList.remove('is-toggled');
      music.classList.remove('is-toggled');
      gaming.classList.remove('is-toggled');

      realName.classList.add('is-toggled');
        
        
      }
      }
      
 */
    
  