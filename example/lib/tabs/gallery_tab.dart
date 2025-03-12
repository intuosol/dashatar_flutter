import 'dart:math';

import 'package:dashatar_flutter/dashatar_flutter.dart';
import 'package:flutter/material.dart';

class GalleryTab extends StatelessWidget {
  const GalleryTab({super.key});

  List<Widget> _allDashatars() {
    List<Widget> cards = [];
    for (var i = 0; i < 49; i++) {
      cards.addAll(
        DashatarType.values.map(
          (type) => _buildAvatarCard(
            '${type.name} $i'.toSentenceCase(),
            Dashatar(index: i, type: type, avoidRepeatedImages: false),
          ),
        ),
      );
    }
    return cards;
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(
          child: GridView.count(
            crossAxisCount: 3,
            crossAxisSpacing: 4,
            mainAxisSpacing: 4,
            padding: EdgeInsets.all(16),
            children: [
              _buildAvatarCard('Silhouette', Dashatar.silhouette()),
              _buildAvatarCard('Basic', Dashatar.basic()),
              _buildAvatarCard(
                'Background',
                Dashatar.random(
                  backgroundColor:
                      Colors.primaries[Random().nextInt(
                        Colors.primaries.length,
                      )],
                  allowBasic: true,
                  avoidRepeatedImages: true,
                ),
              ),
              ..._allDashatars(),
            ],
          ),
        ),
      ],
    );
  }

  Widget _buildAvatarCard(String title, Dashatar dashatar) {
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Expanded(child: Center(child: dashatar)),
            const SizedBox(height: 8),
            Text(
              title,
              style: const TextStyle(fontWeight: FontWeight.bold),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }
}

extension on String {
  String toSentenceCase() {
    return '${this[0].toUpperCase()}${substring(1)}';
  }
}
