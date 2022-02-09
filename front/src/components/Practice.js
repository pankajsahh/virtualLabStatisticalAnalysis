import React,{useState} from 'react';

const Practice =()=>{
    const [data,setcurrent]=useState({current:0,element:0})
    const lis = [1,2,3,4,5,6,7,8,9]
    const {current,element} = data
    const string ='[[1,2,3],[4,5,6],[7,8,9]]'.split('')
    const handleClick=()=>{
        if (string[current+1]===','){ setcurrent({current:current+2,element:string[current+2]});}
        else { setcurrent({current:current<25?current+1:0,element:string[current+1]}); }
    }
    const list = string.map((ele,index)=><b style={{backgroundColor:index===current?'cyan':''}}>{ele}</b>)
    const list2 = lis.map((ele,index)=>{
        if(ele%3===1){
            return (<>
            <div class="grid-item" style={{backgroundColor:~~(current/8)<=~~(index/3)&&~~(index/3)<~~(current/8)+1?'yellow':''}}>
                {(ele-1)/3}
            </div>
            <div class="grid-item" style={{backgroundColor:ele==element?'red':~~(current/8)<=~~(ele/3)&& ~~(ele/3)<~~(current/8)+1?'yellow':''}}>
                {current>((ele-1)*2+~~((index)/3)*2+1)?ele:''}
            </div>
            </>)
        }
        else return <div class="grid-item" style={{backgroundColor:ele==element?'red':~~(current/8)<=~~(index/3)&&~~(index/3)<~~(current/8)+1?'yellow':''}}>
            {current>((ele-1)*2+~~((index)/3)*2+1)?ele:''}
        </div>
    })
    return(
        <>
        <div>
            <h2><b>Instructions </b></h2>
            <p>Just click the next button to see which element goes to which position.</p>
            <h4>On runing: pandas.DataFrame([[1,2,3],[4,5,6],[7,8,9]], [0,1,2],['One','Two','Three'] )</h4>
            <h1>
                {list}
            </h1>
            <div>
            <div class="grid-container">
                <div className='column-name grid-item' >Name of Columns. </div>
  <div class="grid-item" >Row Index</div>
  <div class="grid-item" >'One'</div>
  <div class="grid-item" >'Two'</div>
  <div class="grid-item" >'Three'</div>
  {list2}
  {/* <div class="grid-item" style={styles}>0</div>
  <div class="grid-item" style={styles}>{current>1?1:''}</div>
  <div class="grid-item" style={styles}>{current>3?2:''}</div>
  <div class="grid-item" style={styles}>{current>5?3:''}</div>
  <div class="grid-item" style={styles}>1</div>
  <div class="grid-item" style={styles}>{current>9?4:''}</div>
  <div class="grid-item" style={styles}>{current>11?5:''}</div>
  <div class="grid-item" style={styles}>{current>13?6:''}</div>
  <div class="grid-item" style={styles}>2</div>
  <div class="grid-item" style={styles}>{current>17?7:''}</div>
  <div class="grid-item" style={styles}>{current>19?8:''}</div>
  <div class="grid-item" style={styles}>{current>21?9:''}</div> */}
</div>
            </div>
        </div>
        <h3>Observation</h3>
        <p>
            {element==='['?'The start of row '+~~(current/8):
                element===']'?'The end of row '+~~(current/8):
                element in list ? 'The element '+element+' of sub-list '+(~~(element/3)+1)+' is assigned to [ '+~~((element-1)/3)+' , '+ (element-1)%3 +' ] in the DataFrame':''
            }


        </p>
        <input type='button' onClick={handleClick} value={current>24?'Restart':'Next'}/> 
        </>    
    )
}
export default Practice