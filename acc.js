var arr = [10,24,56,21,34];
		var n = arr.length;
        var t; 
   		for(i = 0;i<n;i++)
		{
			for(j=0;j<n-1;j++)
			{	
			 if(arr[j]>arr[j+1])
			 {
				
				t=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=t;
             }
			
		    }
		    window.alert(arr[i]);
		}