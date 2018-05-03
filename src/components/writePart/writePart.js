export default {
    name:"writeMessage",
    data(){
        return{
        	wck:'',
        	tupian4:[],
					mss:false,
        }
    },
    created(){
    	
    },
    mounted:function(){
    	 
    },
    watch:{
    	wck (val) {
//      console.log(val.length,'333')
        var heit = (Math.ceil(val.length / 10) * 0.5) + 'rem';
//      console.log(heit,'33333')
        var a = document.getElementById('tta');
//      a = heit;
				a.style.height = heit;
//      console.log(a.style.height,'123')
      }
    },
    methods:{
    	
    		openmss(){
    			this.mss = true;
    		},
    		clomss(){
    			this.mss = false;
    		},
    		uploadimg4: function(e) {
    			var that = this;
    			var selectedFile = $("#in5").get(0).files[0]
//  			console.log(selectedFile)
    			var reader = new FileReader();
    			reader.onload = function(e) {
    				if(that.tupian4.length != 4) {
    							that.tupian4.push(e.srcElement.result);
    				}				
//  				console.log(that.tupian4)
    			}
    			reader.readAsDataURL(selectedFile);
    		},
    		choo4(){
    			document.getElementById('int').click()
    		}
    }

  
}