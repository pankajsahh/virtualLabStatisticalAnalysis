import pandas as pd
import tabulate 
data = {'Name':['Tom', 'nick', 'krish', 'jack'],'Age':[20, 21, 19, 18]}
df = pd.DataFrame(data)
print(tabulate.tabulate(df, tablefmt='html',headers='keys'))