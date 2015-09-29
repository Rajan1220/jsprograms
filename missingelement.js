var ref = [];
var arr = [2,3,4];
var max = 6, i, j;

for (i =0; i < max; i++) 
{
	ref[i] = [i];
}
for (i = 0; i < arr.length; i++) 
{
	for (j = 0; j < ref.length; j++) 
	{
		if (arr[i] == ref[j]) 
		{
			ref.splice(j, 1);
		 	break;
		}
	}
}

alert('missing numbers are ' + ref);