import 'package:dashatar_flutter_example/tabs/customizer_tab.dart';
import 'package:dashatar_flutter_example/tabs/gallery_tab.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Dashatar Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dashatar Flutter Demo'),
        backgroundColor: Theme.of(context).colorScheme.primaryContainer,
      ),
      body: DefaultTabController(
        length: 2,
        child: Column(
          children: [
            TabBar(
              labelColor: Theme.of(context).colorScheme.primary,
              tabs: const [Tab(text: 'Gallery'), Tab(text: 'Customizer')],
            ),
            Expanded(
              child: TabBarView(children: [GalleryTab(), CustomizerTab()]),
            ),
          ],
        ),
      ),
    );
  }
}
