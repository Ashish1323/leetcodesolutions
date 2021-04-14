/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    //var n=new Array(image.length).fill(0).map(a=> new Array(image.length).fill(0))
    for(var i=0;i<image.length;i++){
        image[i]=image[i].reverse()
        for(var j=0;j<image.length;j++)
            {
                if(image[i][j]==0) image[i][j]=1
                else image[i][j]=0
            }
    }
    return image
};