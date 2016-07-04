function bouncer(arr) {
  // Don't show a false ID to this bouncer.
 
  return arr.filter(Boolean);
}

bouncer([false, null, 0, NaN, undefined, ""]);
