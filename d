warning: in the working copy of 'resources/js/Components/stock_inventory/UpdateForm.tsx', CRLF will be replaced by LF the next time Git touches it
[1mdiff --git a/app/Http/Controllers/StockController.php b/app/Http/Controllers/StockController.php[m
[1mindex 8867902..a7ec4c4 100644[m
[1m--- a/app/Http/Controllers/StockController.php[m
[1m+++ b/app/Http/Controllers/StockController.php[m
[36m@@ -92,6 +92,13 @@[m [mpublic function releaseStock($id)[m
             'current_stock' => 0[m
         ]);[m
 [m
[32m+[m[32m        History::create([[m
[32m+[m[32m            'rice_id' => $rice->id,[m
[32m+[m[32m            'rice_name' => $rice->name,[m
[32m+[m[32m            'rice_variety' => $rice->variety,[m
[32m+[m[32m            'recent_activity' => 'RELEASED',[m
[32m+[m[32m        ]);[m
[32m+[m
         return back()->with('success', 'Released');[m
     }[m
 [m
[1mdiff --git a/resources/js/Components/stock_inventory/UpdateForm.tsx b/resources/js/Components/stock_inventory/UpdateForm.tsx[m
[1mindex 57d85df..10d8ff3 100644[m
[1m--- a/resources/js/Components/stock_inventory/UpdateForm.tsx[m
[1m+++ b/resources/js/Components/stock_inventory/UpdateForm.tsx[m
[36m@@ -74,7 +74,6 @@[m [mexport default function UpdateForm({ stock, onCancel }: Props) {[m
                 value="Add Stock:"[m
                 className="w-32 text-nowrap"[m
               />[m
[31m-[m
               <TextInput[m
                 type="number"[m
                 id="add_stock"[m
