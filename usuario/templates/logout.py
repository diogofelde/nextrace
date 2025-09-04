@app.route('/logout')
def logout():
 session.pop('usuario', None)
 return redirect(url_for('login'))