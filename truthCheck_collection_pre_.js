function truthCheck(collection, pre) {
    let result = true;
    collection.forEach(
      (item) => result = result && truthCheckForOneList(item, pre)
    );
    return result;
  }
  
  function truthCheckForOneList(list, pre) {
    
    if(Object.keys(list).includes(pre)) {
      if(list[pre] && true == true) {
        return true;
      } else {
        return false;
      }
    } else {
    return false;
    }
  }
  
  console.log(truthCheck([{id: 1, data: {url: "https://freecodecamp.org", name: "freeCodeCamp"}}, {id: 2, data: {url: "https://coderadio.freecodecamp.org/", name: "CodeRadio"}}, {id: null, data: {}}], "id"));