# pandas Datadaframe from lists using zip.
import pandas as pd
Name = ['tom','sh', 'nick', 'juli']
Age = [25, 30, 26, 22]
# get the list of tuples from two lists.# and merge them by using zip().
list_of_tuples = list(zip(Name, Age))
df = pd.DataFrame(list_of_tuples,columns = ['Name', 'Age'])
# Print data.
print(df)