import React from "react";

const Theory = () => {
  return (
    <div className="section__padding">
  
      <h2>
        <strong>Theory</strong>
      </h2>
      <div>
        <h4>Introduction</h4>
        <p>
          Pandas is a well established Python Library used for manipulation,
          processing and analysis of data. We have already discussed the basic
          operations on Series and DataFrame like creating them and then
          accessing data from them. Pandas provides more powerful and useful
          functions for data analysis.
          <br />
          we will be working with more advanced features of DataFrame like
          sorting data, answering analytical questions using the data, cleaning
          data and applying different useful functions on the data. Below is the
          example data on which we will be applying the advanced features of
          Panda
        </p>
      </div>
      <div>
        <h4>Calculating Median</h4>
        <p>
          DataFrame.Median() will display the middle value of the data. This
          function will display the median of the values of each column of a
          DataFrame. It is only applicable for numeric values
          <br />
          print(df.median())
        </p>
      </div>
      <div>
        <h4>Calculate mode</h4>
        <p>
          DateFrame.mode() will display the mode. The mode is defined as the
          value that appears the most number of times in a data. This function
          will display the mode of each column or row of the DataFrame. To get
          the mode of Hindi marks, the following statement can be used.
          <br />
          df[&apos;naame&apos;].mode()
        </p>
      </div>
      <div>
        <h4>Calculating Quartile</h4>
        <p>
          Dataframe.quantile() is used to get the quartiles. It will output the
          quartile of each column or row of the DataFrame in four parts i.e. the
          first quartile is 25% (parameter q = .25), the second quartile is 50%
          (Median), the third quartile is 75% (parameter q = .75). By default,
          it will display the second quantile (median) of all numeric values.
          <br />
          df.quantile()
        </p>
      </div>
      <div>
        <h4>Calculating Variance</h4>
        <p>
          DataFrame.var() is used to display the variance. It is the average of
          squared differences from the mean.
          <br />
          df[[&apos;Maths&apos;,&apos;Science&apos;,&apos;S.
          St&apos;,&apos;Hindi&apos;,&apos;Eng&apos;]].var()
        </p>
      </div>
      <div>
        <h4>Standard Deviation</h4>
        <p>
          DataFrame.std() returns the standard deviation of the values. Standard
          deviation is calculated as the square root of the variance.
          <br />
          df[[&apos;Maths&apos;,&apos;Science&apos;,&apos;S.
          St&apos;,&apos;Hindi&apos;,&apos;Eng&apos;]].std()
        </p>
      </div>
    </div>
  );
};
export default Theory;
