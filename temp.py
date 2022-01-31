import pandas as pd
import tabulate 
data = {'Name':['Tom', 'Jack', 'nick', 'juli'],'marks':[99, 98, 95, 90]}
df = pd.DataFrame(data, index =['rank1','rank2','rank3','rank4'])
print(tabulate.tabulate(df, tablefmt='html', headers='keys'))