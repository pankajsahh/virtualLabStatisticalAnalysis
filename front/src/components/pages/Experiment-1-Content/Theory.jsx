import React from "react";

const Theory =()=>{


    const list1=[1,2,3]
    const list2=[4,5,6]

    return (
        <div className="section__padding">
            <h2><b>Theory</b></h2>
            <p>
                Pandas DataFrame is two-dimensional size-mutable, potentially heterogeneous tabular data structure with labeled axes (rows and columns).
                <br /> A Data frame is a two-dimensional data structure, i.e., data is aligned in a tabular fashion in rows and columns.
                <br /> Pandas DataFrame consists of three principal components, the data, rows, and columns.
                <br />In the real world, a Pandas DataFrame will be created by loading the datasets from existing storage, storage can be SQL Database, CSV file, and Excel file.
                <br />Pandas DataFrame can be created from the lists, dictionary, and from a list of dictionary etc.
                <br /> Dataframe can be created in different ways here are some ways by which we create a dataframe:<br/>
                <br/><b>Method #1:</b> Creating a dataframe using List:<br/> DataFrame can be created using a single list or a list of lists.<br />
            </p>
                list1=[{list1.toString()}]<br/>
                list2=[{list2.toString()}]<br/>
                listOfList=[[{list1.toString()}],[{list2.toString()}]]<br/>
                <div style={{display:'flex',margin:'auto'}}>df=  
                <table style={{padding:'5px'}}>
                    <thead>
                        <th></th>
                        <th>0</th>
                        <th>1</th>
                        <th>2</th>
                    </thead>
                    <tbody>
                        <tr style={{padding:'25px'}}>
                        <td>0</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        </tr>
                        <tr>
                        <td>1</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        </tr>
                    </tbody>
                </table></div>
            <p>
                <b>Method #2:</b> Creating DataFrame from dict of narray/lists<br />
                To create DataFrame from dict of narray/list, all the narray must be of same length. If index is passed then the length index should be equal to the length of arrays. If no index is passed, then by default, index will be range(n) where n is the array length.<br />
            </p>
            <p>
                <b>Method #3:</b> Creates a indexes DataFrame using arrays.<br />
    
            </p>
            <p>
            <b>Method #4:</b> Creating Dataframe from list of dicts<br />
                Pandas DataFrame can be created by passing lists of dictionaries as a input data. By default dictionary keys taken as columns.<br />
    
            </p>
            <p>
            <b>Method #5:</b> Creating DataFrame using zip() function.<br />
                Two lists can be merged by using list(zip()) function. Now, create the pandas DataFrame by calling pd.DataFrame() function.<br />
    
            </p>
            <p>
            <b>Method #6:</b> Creating DataFrame from Dicts of series.<br />
                To create DataFrame from Dicts of series, dictionary can be passed to form a DataFrame. The resultant index is the union of all the series of passed indexed.<br />
            </p>
    
        </div>
    )
}
export default Theory;