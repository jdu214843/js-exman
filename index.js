// js exm
// ?? 1 masala sharti

// let str = "+998 33 576 2020";
//   Javob
// let res = {
//     country: "+998",
//     region: "33",
//     city: "576",
//     number: "2020",
// };

// !! 1 - masala javob
// function getResult(data){
//     let res = {};
//     let result = data.split(" ")
//     if(result[0]){
//        return `Country: ${result[0]} region: ${result[1]} city: ${result[2]} number: ${result[3]}`; 
//     }
//     return res
// }
// const totalResult = getResult(str)
// console.log(totalResult)


// !! 4 - masala

// let title = "webbrain academy";
// function getSort(data){
// let res = data.toLowerCase().split('').sort().join('');
// return res;
// }
// const resut = (getSort(title))
// console.log(resut)

// !! 3 - masala

// 3-savol o'rta arifmetikni toping

    let coordinate = {
      c1: [3, 2, 4], //  [9+4+16]= (29) = 5.1
      c2: [1, 2, 2], // [1,4,4] = (9) = 3
      c3: [7, 4, 1], // [49,16,1] = (66) = 8.4
      c4: [2, 2, 2], // [4,4,4] = (12) = 3.3
    };
    //   res (5.1 + 3 + 8.4 + 3.3)/4
    const mean = (data) => {
        let res = 0;
        for(let i in data){
            if(Array.isArray(i)){
               res += data[i]
            }
            console.log(data[i])
        }     
    };
      mean(coordinate);
// console.log(mean(coordinate))

// !! 2 masala
    //   let s = [2, 3, 5]; // (4 + 9 + 25) // 38
    //   let coordinate = {
    //     c1: [3, 2, 4], // [1,1,1] = (1+1+1) = 3
    //     c2: [1, 2, 2], // [1,1,2] = (1+1+4) = 6
    //     c3: [7, 4, 1], // [5,2,3] = (25+4+9) = 38
    //     c4: [2, 2, 2], // [0,1,3] = (0, 1, 9) = 10
    //   };
    
    //   const calclulate = (coordinate, s) => {};
    //   calclulate(coordinate, s);
      // task
      // 1. s va coordinatalar orasidagi mafosalarni hisoblang.
      // 2. s yigini va coordinatalar yigindisidan hosil bo'lgan s va coordinate yigindilarini hisoblang.