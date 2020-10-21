  export const fetchData = async () => {
    const uri = "https://hangman-291306.appspot.com/rest/hmanservice/getAll";
    let res = null;
    try {
      res=await fetch(uri);
    }
    catch(err){
      console.log(err);
    }
    try {
      const response = await res.json();
      console.log(response);
      return response;
    }
    catch(err){
      console.log(err);
    }
  }

  export async function saveWord (newWord) {
    const response = await fetch("https://hangman-291306.appspot.com/rest/hmanservice/addjsonhman",
    {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({word:newWord})
  });
  }
   
  export const DeleteWord=(id)=>{
    const uri = "https://hangman-291306.appspot.com/rest/hmanservice/deletehman/" + id;

    fetch(uri, {
       method: 'GET'
   }).then(() => {
       console.log('removed');
    }).catch(err => {
      console.error(err)
    });
   }
