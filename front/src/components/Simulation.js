import React, { useState } from 'react';
import axios from 'axios'
const Simulation = () => {
    const defaults = [
        '#Selct a method aur type your own code',
        'import pandas\nimport tabulate \nhe=[[1,2,3],[4,5,6]]\ndf=pandas.DataFrame(he)\nprint(tabulate.tabulate(df, tablefmt=\'html\', headers=\'keys\'))',
        'import pandas as pd\nimport tabulate \ndata = {\'Name\':[\'Tom\', \'nick\', \'krish\', \'jack\'],\'Age\':[20, 21, 19, 18]}\ndf = pd.DataFrame(data)\nprint(tabulate.tabulate(df, tablefmt=\'html\',headers=\'keys\'))',
        'import pandas as pd\nimport tabulate \ndata = {\'Name\':[\'Tom\', \'Jack\', \'nick\', \'juli\'],\'marks\':[99, 98, 95, 90]}\ndf = pd.DataFrame(data, index =[\'rank1\',\'rank2\',\'rank3\',\'rank4\'])\nprint(tabulate.tabulate(df, tablefmt=\'html\', headers=\'keys\'))',
        "import pandas as pd\nimport tabulate \n# Initialize data to lists.\ndata = [{'a': 1, 'b': 2, 'c':3},{'a':10, 'b': 20, 'c': 30}]\n# Creates DataFrame.\ndf = pd.DataFrame(data)\n# Print the data\nprint(tabulate.tabulate(df, tablefmt='html', headers='keys'))",
        "# pandas Datadaframe from lists using zip.\nimport pandas as pd\nimport tabulate \nName = ['tom', 'krish', 'nick', 'juli']\nAge = [25, 30, 26, 22]\n# get the list of tuples from two lists.# and merge them by using zip().\nlist_of_tuples = list(zip(Name, Age))\ndf = pd.DataFrame(list_of_tuples,columns = ['Name', 'Age'])\n# Print data.\nprint(tabulate.tabulate(df, tablefmt='html', headers='keys'))",
        "# Pandas Dataframe from Dicts of series.\nimport pandas as pd\nimport tabulate \nd = {'one' : pd.Series([10, 20, 30, 40],index =['a', 'b', 'c', 'd']),'two' : pd.Series([10, 20, 30, 40],index =['a', 'b', 'c', 'd'])}\ndf = pd.DataFrame(d)\nprint(tabulate.tabulate(df, tablefmt='html', headers='keys'))",
    ]
    const [val, setval] = useState(defaults[0])
    const [current, setcurrent] = useState(0)
    const [args, setargs] = useState('')
    const [res, setres] = useState('your output will show here')
    const handleChange = (e) => {
        if (e.target.id === 'code') setval(e.target.value)
        else setargs(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/', { code: val.replace('',""), args: args })
            .then(res => { setres(res.data); console.log(res.data) })
    }
    const handleSwitch = (e) => {
        setval(defaults[e.target.value])
        setcurrent(e.target.value)
    }
    return (
        <>
            Choose your Method:
            <select value={current} onChange={handleSwitch}>
                <option value={0}>Select Method</option>
                <option value={1}>Method 1</option>
                <option value={2}>Method 2</option>
                <option value={3}>Method 3</option>
                <option value={4}>Method 4</option>
                <option value={5}>Method 5</option>
                <option value={6}>Method 6</option>
            </select>
            <br />
            <div className='responsive-flex'>
                <form onSubmit={handleSubmit}>
                    <textarea id='code' style={{ height: '80vh', maxWidth: '100%',width:'auto',minWidth:'60vw'}} onChange={handleChange} value={val} />
                    <br/>
                    <input id='args' onChange={handleChange} placeholder={'enter comma seperated input(s)'} />
                    <input type='submit' />
                </form>
                <div style={{ color: 'green',fontStyle: 'monospace', height: '80vh',width:'auto', maxWidth: '100%',border:'1px solid black', minWidth: '40vh' }}>
                    {/* {res.split('\n').map(e=><tr>{e.split(' ').map(ele=><td>{ele}</td>)}</tr>)} */}
                <div className="Container" dangerouslySetInnerHTML={{__html: res}}></div>
                </div>
            </div>
        </>
    )
}

export default Simulation