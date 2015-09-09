var arr = [10,24,56,21,34];
		var n = arr.length;
        var t; 

   		for(i = 0;i<n;++i)
		{
			for(j=i+1;j<n;++j)
			{	
			 if(arr[i]<arr[j])
			 {
				
				t=arr[i];
				arr[i]=arr[j];
				arr[j]=t;
             }
             	
		    }
		    print(arr[i]);
		}