# dashboard.py

import streamlit as st
import sqlite3
import pandas as pd

# Caching para otimizar carregamento
@st.cache_data
def load_data(db_path: str) -> pd.DataFrame:
    """
    Conecta ao banco SQLite, carrega os últimos 100 registros de ScanResult
    e retorna um DataFrame.
    """
    conn = sqlite3.connect(db_path)
    df = pd.read_sql_query(
        "SELECT * FROM ScanResult ORDER BY id DESC LIMIT 100",
        conn
    )
    conn.close()
    return df

# Configuração da página
st.set_page_config(
    page_title="NexTrace Dashboard",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Título
st.title("🚀 NexTrace Scan Dashboard")

# Carrega dados
df = load_data("scanner.db")

# Sidebar: filtros
st.sidebar.header("🔎 Filtros")
ports = sorted(df["port"].unique())
selected_ports = st.sidebar.multiselect(
    "Selecione portas",
    options=ports,
    default=ports
)

# Aplica filtro
filtered_df = df[df["port"].isin(selected_ports)]

# Indicadores rápidos
st.sidebar.markdown("### 📊 Indicadores")
st.sidebar.metric("Registros exibidos", len(filtered_df))
st.sidebar.metric("Total de portas distintas", df["port"].nunique())

# Exibição da tabela
st.subheader("📋 Últimos 100 Scans")
st.dataframe(
    filtered_df.reset_index(drop=True),
    use_container_width=True
)

# Gráfico de barras: contagem por porta
st.subheader("📈 Contagem de Scans por Porta")
port_counts = (
    filtered_df["port"]
    .value_counts()
    .rename_axis("port")
    .reset_index(name="counts")
    .sort_values("counts", ascending=False)
)
st.bar_chart(
    data=port_counts.set_index("port")["counts"],
    use_container_width=True
)

# Instruções de execução
st.markdown("---")
st.markdown(
    "Para rodar este dashboard localmente:\n\n"
    "1. Certifique-se de ter o Streamlit instalado: `pip install streamlit`\n"
    "2. Salve este script como `dashboard.py` na raiz do projeto.\n"
    "3. Execute no terminal: `streamlit run dashboard.py`"
)