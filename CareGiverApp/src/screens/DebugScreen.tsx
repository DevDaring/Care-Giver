import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, StyleSheet, TextInput } from 'react-native';
import { AIService } from '../services/AIService';

export const DebugScreen = () => {
  const [status, setStatus] = useState<any>({});
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const aiService = AIService.getInstance();

  const refreshStatus = () => {
    setStatus(aiService.getStatus());
  };

  useEffect(() => {
    refreshStatus();
    const interval = setInterval(refreshStatus, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleInit = async () => {
    addLog('Initializing AI Service...');
    await aiService.initialize();
    addLog('Initialization complete.');
    refreshStatus();
  };

  const handleChat = async () => {
    if (!input) return;
    addLog(`User: ${input}`);
    const start = Date.now();
    const res = await aiService.chat(input);
    const time = Date.now() - start;
    setResponse(res);
    addLog(`AI (${time}ms): ${res}`);
  };

  const addLog = (msg: string) => {
    setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛠️ Arm AI Debugger</Text>
      
      <View style={styles.statusBox}>
        <Text>Model: {status.model}</Text>
        <Text>Ready: {status.isReady ? '✅' : '❌'}</Text>
        <Text>Low End Device: {status.isLowEnd ? '⚠️ YES' : 'NO'}</Text>
      </View>

      <View style={styles.controls}>
        <Button title="Initialize AI" onPress={handleInit} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Type test message..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Send" onPress={handleChat} />

      <Text style={styles.responseLabel}>Last Response:</Text>
      <Text style={styles.response}>{response}</Text>

      <Text style={styles.logsLabel}>Logs:</Text>
      <ScrollView style={styles.logs}>
        {logs.map((log, i) => (
          <Text key={i} style={styles.logItem}>{log}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  statusBox: { padding: 10, backgroundColor: '#fff', borderRadius: 8, marginBottom: 10 },
  controls: { marginBottom: 10 },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginBottom: 10 },
  responseLabel: { fontWeight: 'bold', marginTop: 20 },
  response: { backgroundColor: '#e0e0e0', padding: 10, borderRadius: 5, marginTop: 5 },
  logsLabel: { fontWeight: 'bold', marginTop: 20 },
  logs: { flex: 1, marginTop: 5, backgroundColor: '#000', padding: 10 },
  logItem: { color: '#0f0', fontFamily: 'monospace', fontSize: 12 }
});
