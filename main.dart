import "package:flutter/material.dart";

void main()
{
    runApp(Estudo());
}

class Estudo extends StatelessWidget
{
    const Estudo({Key, key}):super(key: key);

    @override
    Widget build(BuildContext context)
    {
        return MaterialApp(
            home: Scaffold(
                appBar: AppBar(
                    title: Text(
                        "Estudo",
                        style: TextStyle(fontSize: 50, color: Colors.orange)
                    )
                ),
                body: Center(
                    child: Text(
                        "Primeira App feita pelo Estudador",
                        style: TextStyle(fontSize: 20, color: Colors.purple)
                    )
                )
            )
        );
    }
}