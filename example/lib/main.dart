import 'package:dashatar_flutter_example/tabs/customizer_tab.dart';
import 'package:dashatar_flutter_example/tabs/gallery_tab.dart';
import 'package:flutter/material.dart';
import 'package:intuosol_design_system/intuosol_design_system.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return IntuoSolApp(
      title: 'Dashatar Flutter Demo',
      themeMode: ThemeMode.light,
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
    return IntuoSolScaffold(
      appBar: AppBar(
        title: const Text('Dashatar Flutter Demo'),
        actions: [ThemeModeButton()],
      ),
      body: DefaultTabController(
        length: 2,
        child: Column(
          children: [
            TabBar(
              labelColor: Theme.of(context).colorScheme.primary,
              indicatorSize: TabBarIndicatorSize.tab,
              tabs: const [Tab(text: 'Gallery'), Tab(text: 'Customizer')],
            ),
            Expanded(
              child: TabBarView(children: [GalleryTab(), CustomizerTab()]),
            ),
          ],
        ),
      ),
      floatingActionButton: IntuoSolButtons.floatingAboutPackage(
        context: context,
        packageName: 'dashatar_flutter',
        description:
            'A Flutter package that provides an API for using Dash avatars (Dashatars) in Flutter projects.',
      ),
    );
  }
}
