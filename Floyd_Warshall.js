floydWarshallAlgorithm() {
   let dist = {};
   for (let i = 0; i < this.nodes.length; i++) {
      dist[this.nodes[i]] = {};
      this.edges[this.nodes[i]].forEach(e => (dist[this.nodes[i]][e.node] = e.weight));
      this.nodes.forEach(n => {
         if (dist[this.nodes[i]][n] == undefined)
         dist[this.nodes[i]][n] = Infinity;
         if (this.nodes[i] === n) dist[this.nodes[i]][n] = 0;
      });
   }
   this.nodes.forEach(i => {
      this.nodes.forEach(j => {
         this.nodes.forEach(k => {
           if (dist[i][k] + dist[k][j] < dist[i][j])
               dist[i][j] = dist[i][k] + dist[k][j];
            });
         });
      });
      return dist;
   }
}
