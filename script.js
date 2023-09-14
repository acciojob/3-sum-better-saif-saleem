function threeSum(arr, target) {
// write your code here
	let d=Number. MAX_VALUE;
	for(let i=0;i<arr.length-2;i++){
		
		for (let j = 0; j < arr.lenght-1; j++) {
			for (let k = 0; k < arr.length; k++) {
				let s=arr[i]+arr[j]+arr[k];
				if(s>target){
					if (s-target<d) {
						
					d=s;
					}
				}
				else{
					if(target-s<d){
						d=s;
					}
				}
			}
			
		}
		return d;
	}
  
}

module.exports = threeSum;
