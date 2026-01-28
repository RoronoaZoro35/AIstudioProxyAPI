/**
 * LogViewer Component
 * Displays application logs in a scrollable view with level-based coloring
 */

import { useRef, useEffect } from 'react';
import { Trash2, Download, Terminal } from 'lucide-react';
import styles from './LogViewer.module.css';

interface LogEntry {
    id: string;
    timestamp: string;
    level: 'info' | 'warn' | 'error';
    message: string;
}

// Placeholder for demo purposes
const MOCK_LOGS: LogEntry[] = [
    { id: '1', timestamp: '19:15:01', level: 'info', message: 'Application started' },
    { id: '2', timestamp: '19:15:02', level: 'info', message: 'Connecting to AI Studio backend...' },
    { id: '3', timestamp: '19:15:05', level: 'info', message: 'Connected to proxy server at port 8080' },
    { id: '4', timestamp: '19:15:10', level: 'warn', message: 'API response time is higher than usual (450ms)' },
];

export function LogViewer() {
    const contentRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when logs are added
    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    }, []);

    const handleClearLogs = () => {
        console.log('Clear logs clicked');
    };

    const handleExportLogs = () => {
        console.log('Export logs clicked');
    };

    return (
        <div className={styles.logViewer}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <Terminal size={16} />
                    运行日志
                </div>
                <div className={styles.actions}>
                    <button
                        className={styles.actionButton}
                        onClick={handleExportLogs}
                        title="导出日志"
                    >
                        <Download size={16} />
                    </button>
                    <button
                        className={styles.actionButton}
                        onClick={handleClearLogs}
                        title="清除当前日志"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>

            <div className={styles.content} ref={contentRef}>
                {MOCK_LOGS.length > 0 ? (
                    MOCK_LOGS.map((log) => (
                        <div key={log.id} className={styles.logEntry}>
                            <span className={styles.timestamp}>{log.timestamp}</span>
                            <span className={`${styles.level} ${styles[log.level]}`}>
                                {log.level.toUpperCase()}
                            </span>
                            <span className={styles.message}>{log.message}</span>
                        </div>
                    ))
                ) : (
                    <div className={styles.emptyState}>
                        <Terminal size={48} strokeWidth={1} />
                        <p>暂无日志信息</p>
                    </div>
                )}
            </div>
        </div>
    );
}
