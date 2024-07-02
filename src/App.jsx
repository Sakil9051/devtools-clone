import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NetworkMonitor from './components/NetworkMonitor';
import RequestDetails from './components/RequestDetails';
import { addRequest } from './store/requestSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulating network requests for testing
    const requests = [
      {
        url: 'https://api.example.com/data',
        type: 'xhr',
        status: 200,
        size: '1.2MB',
        time: '260ms',
        initiator: 'script.js',
        headers: {
          general: { url: 'https://api.example.com/data', method: 'GET' },
          response: { 'content-type': 'application/json', 'cache-control': 'no-cache' },
          request: { 'user-agent': 'Mozilla/5.0', accept: 'application/json' },
        },
        response: { message: 'Success', data: [1, 2, 3] },
        preview: { message: 'Success', data: [1, 2, 3] },
      },
      {
        url: 'https://api.example.com/style.css',
        type: 'css',
        status: 200,
        size: '177B',
        time: '32ms',
        initiator: 'index.html',
        headers: {
          general: { url: 'https://api.example.com/style.css', method: 'GET' },
          response: { 'content-type': 'text/css', 'cache-control': 'max-age=31536000' },
          request: { 'user-agent': 'Mozilla/5.0', accept: 'text/css' },
        },
        response: 'body { background: #fff; }',
        preview: 'body { background: #fff; }',
      },
      {
        url: 'https://api.example.com/image.png',
        type: 'img',
        status: 200,
        size: '50KB',
        time: '120ms',
        initiator: 'index.html',
        headers: {
          general: { url: 'https://api.example.com/image.png', method: 'GET' },
          response: { 'content-type': 'image/png', 'cache-control': 'max-age=31536000' },
          request: { 'user-agent': 'Mozilla/5.0', accept: 'image/png' },
        },
        response: '<image data>',
        preview: '<image data>',
      },
      {
        url: 'https://api.example.com/font.woff2',
        type: 'font',
        status: 200,
        size: '20KB',
        time: '80ms',
        initiator: 'style.css',
        headers: {
          general: { url: 'https://api.example.com/font.woff2', method: 'GET' },
          response: { 'content-type': 'font/woff2', 'cache-control': 'max-age=31536000' },
          request: { 'user-agent': 'Mozilla/5.0', accept: 'font/woff2' },
        },
        response: '<font data>',
        preview: '<font data>',
      },
      {
        url: 'https://api.example.com/document.pdf',
        type: 'doc',
        status: 200,
        size: '3MB',
        time: '450ms',
        initiator: 'script.js',
        headers: {
          general: { url: 'https://api.example.com/document.pdf', method: 'GET' },
          response: { 'content-type': 'application/pdf', 'cache-control': 'no-cache' },
          request: { 'user-agent': 'Mozilla/5.0', accept: 'application/pdf' },
        },
        response: '<pdf data>',
        preview: '<pdf data>',
      },
      {
        url: 'https://api.example.com/video.mp4',
        type: 'media',
        status: 200,
        size: '4MB',
        time: '800ms',
        initiator: 'index.html',
        headers: {
          general: { url: 'https://api.example.com/video.mp4', method: 'GET' },
          response: { 'content-type': 'video/mp4', 'cache-control': 'max-age=31536000' },
          request: { 'user-agent': 'Mozilla/5.0', accept: 'video/mp4' },
        },
        response: '<video data>',
        preview: '<video data>',
      },
      {
        url: 'https://api.example.com/app.js',
        type: 'js',
        status: 200,
        size: '500KB',
        time: '100ms',
        initiator: 'index.html',
        headers: {
          general: { url: 'https://api.example.com/app.js', method: 'GET' },
          response: { 'content-type': 'application/javascript', 'cache-control': 'max-age=31536000' },
          request: { 'user-agent': 'Mozilla/5.0', accept: 'application/javascript' },
        },
        response: '<js data>',
        preview: '<js data>',
      },
      {
        url: 'https://api.example.com/manifest.json',
        type: 'manifest',
        status: 200,
        size: '1KB',
        time: '15ms',
        initiator: 'index.html',
        headers: {
          general: { url: 'https://api.example.com/manifest.json', method: 'GET' },
          response: { 'content-type': 'application/json', 'cache-control': 'max-age=31536000' },
          request: { 'user-agent': 'Mozilla/5.0', accept: 'application/json' },
        },
        response: '{ "name": "example app" }',
        preview: '{ "name": "example app" }',
      },
      {
        url: 'https://api.example.com/socket',
        type: 'ws',
        status: 101,
        size: '-',
        time: '-',
        initiator: 'script.js',
        headers: {
          general: { url: 'https://api.example.com/socket', method: 'GET' },
          response: { 'content-type': 'text/event-stream' },
          request: { 'user-agent': 'Mozilla/5.0', accept: 'text/event-stream' },
        },
        response: '<websocket data>',
        preview: '<websocket data>',
      },
      {
        url: 'https://api.example.com/wasm-module',
        type: 'wasm',
        status: 200,
        size: '700KB',
        time: '200ms',
        initiator: 'script.js',
        headers: {
          general: { url: 'https://api.example.com/wasm-module', method: 'GET' },
          response: { 'content-type': 'application/wasm', 'cache-control': 'max-age=31536000' },
          request: { 'user-agent': 'Mozilla/5.0', accept: 'application/wasm' },
        },
        response: '<wasm data>',
        preview: '<wasm data>',
      },
      {
        url: 'https://api.example.com/other-resource',
        type: 'other',
        status: 200,
        size: '10KB',
        time: '40ms',
        initiator: 'index.html',
        headers: {
          general: { url: 'https://api.example.com/other-resource', method: 'GET' },
          response: { 'content-type': 'application/octet-stream', 'cache-control': 'no-cache' },
          request: { 'user-agent': 'Mozilla/5.0', accept: 'application/octet-stream' },
        },
        response: '<other data>',
        preview: '<other data>',
      },
    ];
    

    requests.forEach((req, index) => {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('request', { detail: req }));
      }, index * 1000);
    });

    const handleRequest = (event) => {
      dispatch(addRequest(event.detail));
    };

    window.addEventListener('request', handleRequest);

    return () => {
      window.removeEventListener('request', handleRequest);
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">DevTools Clone</h1>
      <div className="grid grid-cols-2 gap-4">
        <NetworkMonitor />
        <RequestDetails />
      </div>
    </div>
  );
}

export default App;
