const listeners = new Set();

export function subscribeModal(listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function openGlobalModal(name) {
  listeners.forEach((listener) => listener(name));
}

export function closeGlobalModal() {
  listeners.forEach((listener) => listener(null));
}
