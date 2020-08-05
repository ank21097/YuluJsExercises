// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
     var top = 0;
     var left = 0;
     var right = n;
     var num = 1;
     var bottom = 0;
     var arr = new Array(n);
     for(var i =0 ;i < n;i++){
         arr[i] = new Array(n);
     }
     while(top!=bottom || left!=right){
        if(top!=bottom){
            for(var i = left;i<right;i++){
                arr[top][i] = num;
                num++;
            }
            top++;
        }
        if(left!=right){
            for(var i = top;i<bottom;i++){
                arr[i][right-1]=  num;
                num++;
            }
            right--;
        }
        if(top!=bottom){
            for(var i = right-1;i>=left;i--){
                arr[bottom-1][i] = num;
                num++;
            }
            bottom--;
        }
        if(left!=right){
            for(var i = bottom-1;i>=top;i--){
                arr[i][left] = num;
                num++;
            }
            left++;
        }
     }
     return arr;
}

module.exports = matrix;
