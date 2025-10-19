exercice 03:
5-4 . le but du pseudo-classe focus
la pseudo classe focus s'applique à un element interactif , l'orsqu'il recoit le focus ckavier . son but d'indiquer visuellement à l'utilisateur quel champ est actif .

6.2 — Spécificité et quelle règle prend precedence ?

La règle footer h1 { font-size:1.2em; } est plus spécifique que la règle générale h1 { font-size:2em; } (sélecteur composé versus sélecteur de type seul).

Par conséquent, l’h1 situé dans le <footer> prendra 1.2em, tandis que les autres h1 utiliseront 2em.
Explication courte : plus un sélecteur contient d’identifiants/classes/éléments combinés, plus sa spécificité est élevée ; la règle la plus spécifique l’emporte .