export default function Alerts() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Alertas de Segurança</h1>
      <p className="text-gray-700">Aqui você verá os alertas mais recentes do sistema.</p>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { fetchRecentCVEs } from '../services/cveService';

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchRecentCVEs();
      setAlerts(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Alertas de Segurança</h1>
      {alerts.length === 0 ? (
        <p>Carregando alertas...</p>
      ) : (
        <ul className="space-y-4">
          {alerts.map((alert) => (
            <li key={alert.cve.id} className="border p-4 rounded shadow">
              <h2 className="font-semibold text-lg">{alert.cve.id}</h2>
              <p className="text-gray-700">{alert.cve.descriptions[0].value}</p>
              <p className="text-sm text-gray-500">Publicado em: {alert.cve.published}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function getSeverity(score) {
  if (score >= 7) return { level: 'Crítico', color: 'text-red-600' };
  if (score >= 4) return { level: 'Moderado', color: 'text-yellow-600' };
  return { level: 'Baixo', color: 'text-green-600' };
}

const [filter, setFilter] = useState('Todos');

import { useState, useEffect } from 'react';
import { fetchRecentCVEs } from '../services/cveService';

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    async function loadData() {
      const data = await fetchRecentCVEs();
      setAlerts(data);
    }
    loadData();
  }, []);

  function getSeverity(score) {
    if (score >= 7) return { level: 'Crítico', color: 'text-red-600' };
    if (score >= 4) return { level: 'Moderado', color: 'text-yellow-600' };
    return { level: 'Baixo', color: 'text-green-600' };
  }

  const filteredAlerts = alerts.filter((alert) => {
    const score = alert.cve.metrics?.cvssMetricV2?.[0]?.baseScore || 0;
    const { level } = getSeverity(score);
    return filter === 'Todos' || level === filter;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Alertas de Segurança</h1>

      <div className="mb-4 flex gap-2">
        {['Todos', 'Baixo', 'Moderado', 'Crítico'].map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`px-3 py-1 rounded ${
              filter === level ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      <ul className="space-y-4">
        {filteredAlerts.map((alert) => {
          const score = alert.cve.metrics?.cvssMetricV2?.[0]?.baseScore || 0;
          const { level, color } = getSeverity(score);
          return (
            <li key={alert.cve.id} className="border p-4 rounded shadow">
              <h2 className={`font-semibold text-lg ${color}`}>
                {alert.cve.id} — {level}
              </h2>
              <p className="text-gray-700">{alert.cve.descriptions[0].value}</p>
              <p className="text-sm text-gray-500">Publicado em: {alert.cve.published}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { salvarAlerta } from '../services/alertService';

<button
  onClick={() => salvarAlerta(alert.cve)}
  className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
>
  Salvar alerta
</button>
