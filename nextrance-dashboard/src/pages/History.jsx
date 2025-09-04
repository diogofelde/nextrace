import { useEffect, useState } from 'react';

const [alertasSalvos, setAlertasSalvos] = useState([]);
const [logAuditoria, setLogAuditoria] = useState([]);
const usuarioAtual = 'Diogo'; // ou capturar dinamicamente

import { marcarComoResolvido } from '../services/alertService';

const handleResolvido = async (id) => {
  await marcarComoResolvido(id);
  setAlertasSalvos((prev) =>
    prev.map((a) => (a.id === id ? { ...a, resolvido: true } : a))
  );
};

<ul className="space-y-4">
  {alertasSalvos.map((alerta) => (
    <li key={alerta.id} className="border p-4 rounded shadow">
      <h2 className="font-semibold text-lg">{alerta.id}</h2>
      <p className="text-gray-700">{alerta.descriptions?.[0]?.value}</p>
      <p className="text-sm text-gray-500">Publicado em: {alerta.published}</p>

      {/* ⬇️ Aqui você insere o trecho novo ⬇️ */}
      <p className="text-sm text-gray-500">
        Status: {alerta.resolvido ? '✅ Resolvido' : '🕒 Pendente'}
      </p>

      {!alerta.resolvido && (
        <button
          onClick={() => handleResolvido(alerta.id)}
          className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
        >
          Marcar como resolvido
        </button>
      )}
    </li>
  ))}
</ul>

<ul className="space-y-4">
  {alertasSalvos.map((alerta) => (
    <li key={alerta.id} className="border p-4 rounded shadow">
      <h2 className="font-semibold text-lg">{alerta.id}</h2>
      <p className="text-gray-700">{alerta.descriptions?.[0]?.value}</p>
      <p className="text-sm text-gray-500">Publicado em: {alerta.published}</p>

      {/* ✅ Status do alerta */}
      <p className="text-sm text-gray-500">
        Status: {alerta.resolvido ? '✅ Resolvido' : '🕒 Pendente'}
      </p>

      {/* 🔘 Botão para marcar como resolvido */}
      {!alerta.resolvido && (
        <button
          onClick={() => handleResolvido(alerta.id)}
          className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
        >
          Marcar como resolvido
        </button>
      )}
    </li>
  ))}
</ul>

<ul className="space-y-4">
  {alertasSalvos.map((alerta) => (
    <li key={alerta.id} className="border p-4 rounded shadow">
      <h2 className="font-semibold text-lg">{alerta.id}</h2>
      <p className="text-gray-700">{alerta.descriptions?.[0]?.value}</p>
      <p className="text-sm text-gray-500">Publicado em: {alerta.published}</p>

      {/* ✅ Status do alerta */}
      <p className="text-sm text-gray-500">
        Status: {alerta.resolvido ? '✅ Resolvido' : '🕒 Pendente'}
      </p>

      {/* 📅 Data de resolução */}
      {alerta.resolvido && alerta.dataResolucao && (
        <p className="text-sm text-gray-400">
          Resolvido em: {new Date(alerta.dataResolucao).toLocaleDateString('pt-BR')}
        </p>
      )}

      {/* 🔘 Botão para marcar como resolvido */}
      {!alerta.resolvido && (
        <button
          onClick={() => {
            handleResolvido(alerta.id);
            alert('✅ Alerta marcado como resolvido!');
          }}
          className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          Marcar como resolvido
        </button>
      )}
    </li>
  ))}
</ul>

const handleResolvido = (id) => {
  const atualizados = alertasSalvos.map(alerta =>
    alerta.id === id
      ? { ...alerta, resolvido: true, dataResolucao: new Date().toISOString() }
      : alerta
  );
  setAlertasSalvos(atualizados);
};

import { useEffect, useState } from 'react';

const [alertasSalvos, setAlertasSalvos] = useState([]);

useEffect(() => {
  const salvos = localStorage.getItem('alertasSalvos');
  if (salvos) {
    setAlertasSalvos(JSON.parse(salvos));
  }
}, []);

const handleResolvido = (id) => {
  const atualizados = alertasSalvos.map(alerta =>
    alerta.id === id
      ? { ...alerta, resolvido: true, dataResolucao: new Date().toISOString() }
      : alerta
  );
  setAlertasSalvos(atualizados);
  localStorage.setItem('alertasSalvos', JSON.stringify(atualizados));
  alert('✅ Alerta marcado como resolvido!');
};

<ul className="space-y-4">
  {alertasSalvos.map((alerta) => (
    <li key={alerta.id} className="border p-4 rounded shadow">
      <h2 className="font-semibold text-lg">{alerta.id}</h2>
      <p className="text-gray-700">{alerta.descriptions?.[0]?.value}</p>
      <p className="text-sm text-gray-500">Publicado em: {alerta.published}</p>

      <p className="text-sm text-gray-500">
        Status: {alerta.resolvido ? '✅ Resolvido' : '🕒 Pendente'}
      </p>

      {alerta.resolvido && alerta.dataResolucao && (
        <p className="text-sm text-gray-400">
          Resolvido em: {new Date(alerta.dataResolucao).toLocaleDateString('pt-BR')}
        </p>
      )}

      {!alerta.resolvido && (
        <button
          onClick={() => handleResolvido(alerta.id)}
          className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          Marcar como resolvido
        </button>
      )}
    </li>
  ))}
</ul>

import { useEffect, useState } from 'react';

const [alertasSalvos, setAlertasSalvos] = useState([]);
const [logAuditoria, setLogAuditoria] = useState([]);
const usuarioAtual = 'Diogo'; // ou capturar dinamicamente

const registrarAuditoria = (acao, usuario) => {
  const logAtual = JSON.parse(localStorage.getItem('logAuditoria')) || [];
  const novaEntrada = {
    acao,
    usuario,
    data: new Date().toISOString()
  };
  const atualizado = [...logAtual, novaEntrada];
  localStorage.setItem('logAuditoria', JSON.stringify(atualizado));
  setLogAuditoria(atualizado);
};
const handleResolvido = (id) => {
  const atualizados = alertasSalvos.map(alerta =>
    alerta.id === id
      ? { ...alerta, resolvido: true, dataResolucao: new Date().toISOString() }
      : alerta
  );
  setAlertasSalvos(atualizados);
  localStorage.setItem('alertasSalvos', JSON.stringify(atualizados));
  registrarAuditoria(`Marcou alerta ${id} como resolvido`, usuarioAtual);
  alert('✅ Alerta marcado como resolvido!');
};

const limparHistorico = () => {
  const confirmar = window.confirm('Tem certeza que deseja apagar o histórico?');
  if (confirmar) {
    localStorage.removeItem('alertasSalvos');
    setAlertasSalvos([]);
    registrarAuditoria('Apagou histórico de alertas', usuarioAtual);
    alert('🗑️ Histórico apagado com sucesso!');
  }
};

useEffect(() => {
  const salvos = localStorage.getItem('alertasSalvos');
  const log = localStorage.getItem('logAuditoria');
  if (salvos) setAlertasSalvos(JSON.parse(salvos));
  if (log) setLogAuditoria(JSON.parse(log));
}, []);

<h3 className="mt-8 font-bold">Log de Auditoria</h3>
<ul className="text-sm text-gray-600">
  {logAuditoria.map((entrada, index) => (
    <li key={index}>
      {entrada.usuario} fez "{entrada.acao}" em {new Date(entrada.data).toLocaleString('pt-BR')}
    </li>
  ))}
</ul>

const registrarAuditoria = (acao, usuario) => {
  const logAtual = JSON.parse(localStorage.getItem('logAuditoria')) || [];
  const novaEntrada = {
    acao,
    usuario,
    data: new Date().toISOString()
  };
  const atualizado = [...logAtual, novaEntrada];
  localStorage.setItem('logAuditoria', JSON.stringify(atualizado));
  setLogAuditoria(atualizado);
};

const handleResolvido = (id) => {
  const atualizados = alertasSalvos.map(alerta =>
    alerta.id === id
      ? { ...alerta, resolvido: true, dataResolucao: new Date().toISOString() }
      : alerta
  );
  setAlertasSalvos(atualizados);
  localStorage.setItem('alertasSalvos', JSON.stringify(atualizados));
  registrarAuditoria(`Marcou alerta ${id} como resolvido`, usuarioAtual);
  alert('✅ Alerta marcado como resolvido!');
};

const limparHistorico = () => {
  const confirmar = window.confirm('Tem certeza que deseja apagar o histórico?');
  if (confirmar) {
    localStorage.removeItem('alertasSalvos');
    setAlertasSalvos([]);
    registrarAuditoria('Apagou histórico de alertas', usuarioAtual);
    alert('🗑️ Histórico apagado com sucesso!');
  }
};

useEffect(() => {
  const salvos = localStorage.getItem('alertasSalvos');
  const log = localStorage.getItem('logAuditoria');
  if (salvos) setAlertasSalvos(JSON.parse(salvos));
  if (log) setLogAuditoria(JSON.parse(log));
}, []);

<h3 className="mt-8 font-bold">Log de Auditoria</h3>
<ul className="text-sm text-gray-600">
  {logAuditoria.map((entrada, index) => (
    <li key={index}>
      {entrada.usuario} fez "{entrada.acao}" em {new Date(entrada.data).toLocaleString('pt-BR')}
    </li>
  ))}
</ul>

<div className="mt-10">
  <h3 className="text-lg font-bold mb-2">📋 Log de Auditoria</h3>
  <table className="w-full text-sm border border-gray-300">
    <thead className="bg-gray-100">
      <tr>
        <th className="border px-2 py-1 text-left">Usuário</th>
        <th className="border px-2 py-1 text-left">Ação</th>
        <th className="border px-2 py-1 text-left">Data</th>
      </tr>
    </thead>
    <tbody>
      {logAuditoria.map((entrada, index) => (
        <tr key={index} className="hover:bg-gray-50">
          <td className="border px-2 py-1">{entrada.usuario}</td>
          <td className="border px-2 py-1">{entrada.acao}</td>
          <td className="border px-2 py-1">
            {new Date(entrada.data).toLocaleString('pt-BR')}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<button
  onClick={exportarLog}
  className="mb-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
>
  📤 Exportar Log de Auditoria
</button>

// src/pages/History.jsx
import { useState, useEffect } from 'react';
import AlertaCard from '../components/AlertaCard';
import LogAuditoria from '../components/LogAuditoria';
import { useAuditoria } from '../hooks/useAuditoria';
import { salvarLocal, carregarLocal } from '../utils/localStorageUtils';

export default function History() {
  const [alertasSalvos, setAlertasSalvos] = useState([]);
  const usuarioAtual = 'Diogo';
  const { logAuditoria, registrar } = useAuditoria(usuarioAtual);

  useEffect(() => {
    const salvos = carregarLocal('alertasSalvos');
    if (salvos) setAlertasSalvos(salvos);
  }, []);

  const handleResolvido = (id) => {
    const atualizados = alertasSalvos.map(alerta =>
      alerta.id === id
        ? { ...alerta, resolvido: true, dataResolucao: new Date().toISOString() }
        : alerta
    );
    setAlertasSalvos(atualizados);
    salvarLocal('alertasSalvos', atualizados);
    registrar(`Marcou alerta ${id} como resolvido`);
    alert('✅ Alerta marcado como resolvido!');
  };

  const limparHistorico = () => {
    if (window.confirm('Tem certeza que deseja apagar o histórico?')) {
      localStorage.removeItem('alertasSalvos');
      setAlertasSalvos([]);
      registrar('Apagou histórico de alertas');
    }
  };

  const exportarLog = () => {
    const dados = JSON.stringify(logAuditoria, null, 2);
    const blob = new Blob([dados], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'log-auditoria.json';
    link.click();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Histórico de Alertas</h1>
      <ul className="space-y-4">
        {alertasSalvos.map(alerta => (
          <AlertaCard key={alerta.id} alerta={alerta} onResolvido={handleResolvido} />
        ))}
      </ul>

      <button
        onClick={limparHistorico}
        className="mt-6 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
      >
        🗑️ Limpar Histórico
      </button>

      <LogAuditoria log={logAuditoria} onExportar={exportarLog} />
    </div>
  );
}
