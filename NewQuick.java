
public List<Edge> quickParcialInsert(List<Edge> arestas, int inicio, int fim) {

		while (inicio < fim) {
			if (fim - inicio < 10) {
				insertionSort(arestas); // a simple insertion sort
				break;
			}

			else {
				int pivot = partition(arestas, inicio, fim);

				if (pivot - inicio < fim - pivot) {
					quickParcialInsert(arestas, inicio, pivot - 1);
					inicio = pivot + 1;
				} else {
					quickParcialInsert(arestas, pivot + 1, fim);
					fim = pivot - 1;
				}
			}
		}
		return arestas;
}

public int partition (List<Edge> arestas, int inicio, int fim) {
		Edge pivot = arestas.get(fim);
		int pIndex = inicio;

		for (int i = inicio; i < fim; i++) {
			if (arestas.get(i).peso <= pivot.peso) {
				Edge temp = arestas.get(i);
				arestas.set(i, arestas.get(pIndex));
				arestas.set(pIndex, temp);
				pIndex++;
			}
		}

		Edge temp = arestas.get(fim);
		arestas.set(fim, arestas.get(pIndex));
		arestas.set(pIndex, temp);

		return pIndex;
}